module.exports ={

    testEnvironment:'jsdom',
    setupFilesAfterEnv:['@testing-library/jest-dom', '<rootDir>/setupTests.js'],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    moduleNameMapper:{
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    } 
};