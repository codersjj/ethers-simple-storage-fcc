// const ethers = require("ethers");
// const fs = require("fs");
// require("dotenv").config();
import { ethers } from "ethers"
import fs from "fs"
import "dotenv/config"

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!)
  const encryptedJSONKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD!,
  )
  console.log(encryptedJSONKey)
  fs.writeFileSync("./.encryptedKey.json", encryptedJSONKey)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
