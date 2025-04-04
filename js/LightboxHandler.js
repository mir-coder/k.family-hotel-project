class LightboxHandler {
    constructor(lightboxConfigs) {
        this.lightboxConfigs = lightboxConfigs; // Массив конфигураций для lightbox

        this.init();
    }

    init() {
        this.lightboxConfigs.forEach(config => {
            const { id, onOpenCallback } = config;
            fsLightboxInstances[id].props.onOpen = onOpenCallback;
        });
    }
}

export default LightboxHandler;