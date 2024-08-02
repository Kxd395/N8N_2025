import { setupTestServer } from '@test-integration/utils';
import { createMember, createOwner } from '@test-integration/db/users';
import * as testDb from '../shared/testDb';
import { FeatureNotLicensedError } from '@/errors/feature-not-licensed.error';
import { createTeamProject, getProjectByNameOrFail } from '@test-integration/db/projects';
import { mockInstance } from '@test/mocking';
import { Telemetry } from '@/telemetry';

describe('Projects in Public API', () => {
	const testServer = setupTestServer({ endpointGroups: ['publicApi'] });
	mockInstance(Telemetry);

	beforeAll(async () => {
		await testDb.init();
	});

	beforeEach(async () => {
		await testDb.truncate(['Project', 'User']);
	});

	describe('GET /projects', () => {
		it('if licensed, should return all projects with pagination', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const owner = await createOwner({ withApiKey: true });
			const projects = await Promise.all([
				createTeamProject(),
				createTeamProject(),
				createTeamProject(),
			]);

			/**
			 * Act
			 */
			const response = await testServer.publicApiAgentFor(owner).get('/projects');

			/**
			 * Assert
			 */
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('data');
			expect(response.body).toHaveProperty('nextCursor');
			expect(Array.isArray(response.body.data)).toBe(true);
			expect(response.body.data.length).toBe(projects.length + 1); // +1 for the owner's personal project

			projects.forEach(({ id, name }) => {
				expect(response.body.data).toContainEqual(expect.objectContaining({ id, name }));
			});
		});

		it('if not licensed, should reject', async () => {
			/**
			 * Arrange
			 */
			const owner = await createOwner({ withApiKey: true });

			/**
			 * Act
			 */
			const response = await testServer.publicApiAgentFor(owner).get('/projects');

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty(
				'message',
				new FeatureNotLicensedError('feat:projectRole:admin').message,
			);
		});

		it('if missing scope, should reject', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const owner = await createMember({ withApiKey: true });

			/**
			 * Act
			 */
			const response = await testServer.publicApiAgentFor(owner).get('/projects');

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty('message', 'Forbidden');
		});
	});

	describe('POST /projects', () => {
		it('if licensed, should create a new project', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const owner = await createOwner({ withApiKey: true });
			const projectPayload = { name: 'some-project' };

			/**
			 * Act
			 */
			const response = await testServer
				.publicApiAgentFor(owner)
				.post('/projects')
				.send(projectPayload);

			/**
			 * Assert
			 */
			expect(response.status).toBe(201);
			expect(response.body).toEqual({
				name: 'some-project',
				type: 'team',
				id: expect.any(String),
				createdAt: expect.any(String),
				updatedAt: expect.any(String),
				role: 'project:admin',
				scopes: expect.any(Array),
			});
			await expect(getProjectByNameOrFail(projectPayload.name)).resolves.not.toThrow();
		});

		it('if not licensed, should reject', async () => {
			/**
			 * Arrange
			 */
			const owner = await createOwner({ withApiKey: true });
			const projectPayload = { name: 'some-project' };

			/**
			 * Act
			 */
			const response = await testServer
				.publicApiAgentFor(owner)
				.post('/projects')
				.send(projectPayload);

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty(
				'message',
				new FeatureNotLicensedError('feat:projectRole:admin').message,
			);
		});

		it('if missing scope, should reject', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const member = await createMember({ withApiKey: true });
			const projectPayload = { name: 'some-project' };

			/**
			 * Act
			 */
			const response = await testServer
				.publicApiAgentFor(member)
				.post('/projects')
				.send(projectPayload);

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty('message', 'Forbidden');
		});
	});

	describe('DELETE /projects/:id', () => {
		it('if licensed, should delete a project', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const owner = await createOwner({ withApiKey: true });
			const project = await createTeamProject();

			/**
			 * Act
			 */
			const response = await testServer.publicApiAgentFor(owner).delete(`/projects/${project.id}`);

			/**
			 * Assert
			 */
			expect(response.status).toBe(204);
			await expect(getProjectByNameOrFail(project.id)).rejects.toThrow();
		});

		it('if not licensed, should reject', async () => {
			/**
			 * Arrange
			 */
			const owner = await createOwner({ withApiKey: true });
			const project = await createTeamProject();

			/**
			 * Act
			 */
			const response = await testServer.publicApiAgentFor(owner).delete(`/projects/${project.id}`);

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty(
				'message',
				new FeatureNotLicensedError('feat:projectRole:admin').message,
			);
		});

		it('if missing scope, should reject', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const member = await createMember({ withApiKey: true });
			const project = await createTeamProject();

			/**
			 * Act
			 */
			const response = await testServer.publicApiAgentFor(member).delete(`/projects/${project.id}`);

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty('message', 'Forbidden');
		});
	});

	describe('PUT /projects/:id', () => {
		it('if licensed, should update a project', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const owner = await createOwner({ withApiKey: true });
			const project = await createTeamProject('old-name');

			/**
			 * Act
			 */
			const response = await testServer
				.publicApiAgentFor(owner)
				.put(`/projects/${project.id}`)
				.send({ name: 'new-name' });

			/**
			 * Assert
			 */
			expect(response.status).toBe(204);
			await expect(getProjectByNameOrFail('new-name')).resolves.not.toThrow();
		});

		it('if not licensed, should reject', async () => {
			/**
			 * Arrange
			 */
			const owner = await createOwner({ withApiKey: true });
			const project = await createTeamProject();

			/**
			 * Act
			 */
			const response = await testServer
				.publicApiAgentFor(owner)
				.put(`/projects/${project.id}`)
				.send({ name: 'new-name' });

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty(
				'message',
				new FeatureNotLicensedError('feat:projectRole:admin').message,
			);
		});

		it('if missing scope, should reject', async () => {
			/**
			 * Arrange
			 */
			testServer.license.setQuota('quota:maxTeamProjects', -1);
			testServer.license.enable('feat:projectRole:admin');
			const member = await createMember({ withApiKey: true });
			const project = await createTeamProject();

			/**
			 * Act
			 */
			const response = await testServer
				.publicApiAgentFor(member)
				.put(`/projects/${project.id}`)
				.send({ name: 'new-name' });

			/**
			 * Assert
			 */
			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty('message', 'Forbidden');
		});
	});
});
