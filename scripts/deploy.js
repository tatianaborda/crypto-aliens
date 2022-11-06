const deploy = async () => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account: ", deployer.address);

    const CryptoAliens = await ethers.getContractFactory("CryptoAliens");
    const deployed = await CryptoAliens.deploy(10000);

    console.log("CryptoAliens has been deployed at: ", deployed.address);
};

deploy()
.then(() => process.exit(0))
.catch(error => {
    console.log(error);
    process.exit(1);
})