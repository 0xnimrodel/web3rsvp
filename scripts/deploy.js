const hre = require('hardhat')

const main = async () => {
  const rsvpContractFactory = await hre.ethers.getContractFactory('Web3RSVP')
  const rsvpContract = await rsvpContractFactory.deploy()
  await rsvpContract.deployed()
  console.log('RSVP contract deployed at: ' + rsvpContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
