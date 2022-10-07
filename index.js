import testDependency from "yarn_upgrade_test_dependency";

const someFunctionWithADependency = () => {
    console.log('gonna do things here that rely on another repo');
    testDependency();
};

someFunctionWithADependency();
export default someFunctionWithADependency