import {
	ABOUT_MODAL_KEY,
	COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY,
	COMMUNITY_PACKAGE_INSTALL_MODAL_KEY,
	CREDENTIAL_EDIT_MODAL_KEY,
	CREDENTIAL_SELECT_MODAL_KEY,
	CHANGE_PASSWORD_MODAL_KEY,
	CONTACT_PROMPT_MODAL_KEY,
	CREDENTIAL_LIST_MODAL_KEY,
	DELETE_USER_MODAL_KEY,
	DUPLICATE_MODAL_KEY,
	EXECUTIONS_MODAL_KEY,
	PERSONALIZATION_MODAL_KEY,
	INVITE_USER_MODAL_KEY,
	TAGS_MANAGER_MODAL_KEY,
	VALUE_SURVEY_MODAL_KEY,
	VERSIONS_MODAL_KEY,
	WORKFLOW_ACTIVE_MODAL_KEY,
	WORKFLOW_OPEN_MODAL_KEY,
	WORKFLOW_SETTINGS_MODAL_KEY,
	VIEWS,
	COMMUNITY_PACKAGE_MANAGE_ACTIONS,
} from '@/constants';
import Vue from 'vue';
import { ActionContext, Module } from 'vuex';
import {
	IRootState,
	IRunDataDisplayMode,
	IUiState,
} from '../Interface';

const module: Module<IUiState, IRootState> = {
	namespaced: true,
	state: {
		modals: {
			[ABOUT_MODAL_KEY]: {
				open: false,
			},
			[CHANGE_PASSWORD_MODAL_KEY]: {
				open: false,
			},
			[CONTACT_PROMPT_MODAL_KEY]: {
				open: false,
			},
			[CREDENTIAL_EDIT_MODAL_KEY]: {
				open: false,
				mode: '',
				activeId: null,
			},
			[CREDENTIAL_LIST_MODAL_KEY]: {
				open: false,
			},
			[CREDENTIAL_SELECT_MODAL_KEY]: {
				open: false,
			},
			[DELETE_USER_MODAL_KEY]: {
				open: false,
				activeId: null,
			},
			[DUPLICATE_MODAL_KEY]: {
				open: false,
			},
			[PERSONALIZATION_MODAL_KEY]: {
				open: false,
			},
			[INVITE_USER_MODAL_KEY]: {
				open: false,
			},
			[TAGS_MANAGER_MODAL_KEY]: {
				open: false,
			},
			[WORKFLOW_OPEN_MODAL_KEY]: {
				open: false,
			},
			[VALUE_SURVEY_MODAL_KEY]: {
				open: false,
			},
			[VERSIONS_MODAL_KEY]: {
				open: false,
			},
			[WORKFLOW_SETTINGS_MODAL_KEY]: {
				open: false,
			},
			[EXECUTIONS_MODAL_KEY]: {
				open: false,
			},
			[WORKFLOW_ACTIVE_MODAL_KEY]: {
				open: false,
			},
			[COMMUNITY_PACKAGE_INSTALL_MODAL_KEY]: {
				open: false,
			},
			[COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY]: {
				open: false,
				mode: '',
				activeId: null,
			},
		},
		modalStack: [],
		sidebarMenuCollapsed: true,
		isPageLoading: true,
		currentView: '',
		ndv: {
			sessionId: '',
			input: {
				displayMode: 'table',
			},
			output: {
				displayMode: 'table',
			},
		},
		mainPanelPosition: 0.5,
	},
	getters: {
		areExpressionsDisabled(state: IUiState) {
			return state.currentView === VIEWS.DEMO;
		},
		isVersionsOpen: (state: IUiState) => {
			return state.modals[VERSIONS_MODAL_KEY].open;
		},
		isModalOpen: (state: IUiState) => {
			return (name: string) => state.modals[name].open;
		},
		isModalActive: (state: IUiState) => {
			return (name: string) => state.modalStack.length > 0 && name === state.modalStack[0];
		},
		getModalActiveId: (state: IUiState) => {
			return (name: string) => state.modals[name].activeId;
		},
		getModalMode: (state: IUiState) => {
			return (name: string) => state.modals[name].mode;
		},
		sidebarMenuCollapsed: (state: IUiState): boolean => state.sidebarMenuCollapsed,
		ndvSessionId: (state: IUiState): string => state.ndv.sessionId,
		getPanelDisplayMode: (state: IUiState)  => {
			return (panel: 'input' | 'output') => state.ndv[panel].displayMode;
		},
		inputPanelDispalyMode: (state: IUiState) => state.ndv.input.displayMode,
		outputPanelDispalyMode: (state: IUiState) => state.ndv.output.displayMode,
		mainPanelPosition: (state: IUiState) => state.mainPanelPosition,
	},
	mutations: {
		setMode: (state: IUiState, params: {name: string, mode: string}) => {
			const { name, mode } = params;
			Vue.set(state.modals[name], 'mode', mode);
		},
		setActiveId: (state: IUiState, params: {name: string, id: string}) => {
			const { name, id } = params;
			Vue.set(state.modals[name], 'activeId', id);
		},
		openModal: (state: IUiState, name: string) => {
			Vue.set(state.modals[name], 'open', true);
			state.modalStack = [name].concat(state.modalStack);
		},
		closeModal: (state: IUiState, name: string) => {
			Vue.set(state.modals[name], 'open', false);
			state.modalStack = state.modalStack.filter((openModalName: string) => {
				return name !== openModalName;
			});
		},
		closeAllModals: (state: IUiState) => {
			Object.keys(state.modals).forEach((name: string) => {
				if (state.modals[name].open) {
					Vue.set(state.modals[name], 'open', false);
				}
			});
			state.modalStack = [];
		},
		toggleSidebarMenuCollapse: (state: IUiState) => {
			state.sidebarMenuCollapsed = !state.sidebarMenuCollapsed;
		},
		setCurrentView: (state: IUiState, currentView: string) => {
			state.currentView = currentView;
		},
		setNDVSessionId: (state: IUiState) => {
			Vue.set(state.ndv, 'sessionId', `ndv-${Math.random().toString(36).slice(-8)}`);
		},
		resetNDVSessionId: (state: IUiState) => {
			Vue.set(state.ndv, 'sessionId', '');
		},
		setPanelDisplayMode: (state: IUiState, params: {pane: 'input' | 'output', mode: IRunDataDisplayMode}) => {
			Vue.set(state.ndv[params.pane], 'displayMode', params.mode);
		},
		setMainPanelRelativePosition(state: IUiState, relativePosition: number) {
			state.mainPanelPosition = relativePosition;
		},

	},
	actions: {
		openModal: async (context: ActionContext<IUiState, IRootState>, modalKey: string) => {
			context.commit('openModal', modalKey);
		},
		openDeleteUserModal: async (context: ActionContext<IUiState, IRootState>, { id }: {id: string}) => {
			context.commit('setActiveId', { name: DELETE_USER_MODAL_KEY, id });
			context.commit('openModal', DELETE_USER_MODAL_KEY);
		},
		openExisitngCredential: async (context: ActionContext<IUiState, IRootState>, { id }: {id: string}) => {
			context.commit('setActiveId', { name: CREDENTIAL_EDIT_MODAL_KEY, id });
			context.commit('setMode', { name: CREDENTIAL_EDIT_MODAL_KEY, mode: 'edit' });
			context.commit('openModal', CREDENTIAL_EDIT_MODAL_KEY);
		},
		openNewCredential: async (context: ActionContext<IUiState, IRootState>, { type }: {type: string}) => {
			context.commit('setActiveId', { name: CREDENTIAL_EDIT_MODAL_KEY, id: type });
			context.commit('setMode', { name: CREDENTIAL_EDIT_MODAL_KEY, mode: 'new' });
			context.commit('openModal', CREDENTIAL_EDIT_MODAL_KEY);
		},
		async openCommunityPackageUninstallConfirmModal(context: ActionContext<IUiState, IRootState>, packageName: string) {
			context.commit('setActiveId', { name: COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY,  id: packageName});
			context.commit('setMode', { name: COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, mode: COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL });
			context.commit('openModal', COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY);
		},
		async openCommunityPackageUpdateConfirmModal(context: ActionContext<IUiState, IRootState>, packageName: string) {
			context.commit('setActiveId', { name: COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY,  id: packageName});
			context.commit('setMode', { name: COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, mode: COMMUNITY_PACKAGE_MANAGE_ACTIONS.UPDATE });
			context.commit('openModal', COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY);
		},
	},
};

export default module;
