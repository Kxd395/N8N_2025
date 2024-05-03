import { defineStore } from 'pinia';
import * as aiApi from '@/api/ai';
import type { DebugErrorPayload, GenerateCurlPayload } from '@/api/ai';
import { useRootStore } from '@/stores/n8nRoot.store';
import { useSettingsStore } from '@/stores/settings.store';
import { computed, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import type { AIAssistantConnectionInfo, XYPosition } from '@/Interface';

const CURRENT_POPUP_HEIGHT = 94;

/**
 * Calculates the position for the next step popup based on the specified element
 * so they are aligned vertically.
 */
const getPopupCenterPosition = (relativeElement: HTMLElement) => {
	const bounds = relativeElement.getBoundingClientRect();
	const rectMiddle = bounds.top + bounds.height / 2;
	const x = bounds.left + bounds.width + 22;
	const y = rectMiddle - CURRENT_POPUP_HEIGHT / 2;
	return [x, y] as XYPosition;
};

export const useAIStore = defineStore('ai', () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();

	const assistantChatOpen = ref(false);
	const nextStepPopupConfig = reactive({
		open: false,
		title: '',
		position: [0, 0] as XYPosition,
	});
	const latestConnectionInfo: Ref<AIAssistantConnectionInfo | null> = ref(null);
	const isErrorDebuggingEnabled = computed(() => settingsStore.settings.ai.errorDebugging);
	const isErrorDebuggingEnabled = computed(() => settingsStore.settings.ai.features.errorDebugging);
	const isGenerateCurlEnabled = computed(() => settingsStore.settings.ai.features.generateCurl);

	function openNextStepPopup(title: string, relativeElement: HTMLElement) {
		nextStepPopupConfig.open = true;
		nextStepPopupConfig.title = title;
		nextStepPopupConfig.position = getPopupCenterPosition(relativeElement);
	}

	function closeNextStepPopup() {
		nextStepPopupConfig.open = false;
	}

	async function debugError(payload: DebugErrorPayload) {
		return await aiApi.debugError(rootStore.getRestApiContext, payload);
	}

	async function generateCurl(payload: GenerateCurlPayload) {
		return await aiApi.generateCurl(rootStore.getRestApiContext, payload);
	}

	return {
		isErrorDebuggingEnabled,
		debugError,
		assistantChatOpen,
		nextStepPopupConfig,
		openNextStepPopup,
		closeNextStepPopup,
		latestConnectionInfo,
		generateCurl,
		isGenerateCurlEnabled,
	};
});
