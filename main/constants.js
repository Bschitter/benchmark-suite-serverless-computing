/** constants with providers, languages and tests */
const AWS = 'aws';
const AZURE = 'azure';
const AZUREWINDOWS = 'azureWindows';
const GOOGLE = 'google';
const IBM = 'ibm';

const NODE = 'node';
const PYTHON = 'python';
const GO = 'go';
const DOTNET = 'dotnet';

const LATENCY = 'latency';
const FACTORS = 'factors';
const MEMORY = 'memory';
const FILESYSTEM = 'filesystem';
const CUSTOM = 'custom';

const PROVIDERS = [AWS, AZURE, AZUREWINDOWS, GOOGLE, IBM];
const LANGUAGES = [NODE, PYTHON, GO, DOTNET];
const TESTS = [LATENCY, FACTORS, MEMORY, FILESYSTEM, CUSTOM];

module.exports = {  AWS, AZURE, AZUREWINDOWS, GOOGLE, IBM,
                    NODE, PYTHON, GO, DOTNET,
                    LATENCY, FACTORS, MEMORY, FILESYSTEM, CUSTOM,
                    PROVIDERS, LANGUAGES, TESTS}