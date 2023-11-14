export interface TestConfig {
    siteRevision: string;
    branchId: string;
}

export function setTestsConfig(config: TestConfig): void;

export function getTestsConfig(): TestConfig;

export function refreshTestsConfigs(): Promise<TestConfig>;