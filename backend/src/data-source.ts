import "reflect-metadata"
import { DataSource } from "typeorm"
import { TestIntegration } from "./entity/TestIntegration"

// EMAIL : reactexpress123@blondmail.com

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "monorail.proxy.rlwy.net",
    port: 23634,
    username: "postgres",
    password: "ab3e1bF5AgDefGBAGBffAB6GC34a5da1",
    database: "railway",
    synchronize: true,
    logging: false,
    entities: [TestIntegration],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
