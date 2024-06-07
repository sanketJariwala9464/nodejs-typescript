import type { Knex } from "knex";
import 'module-alias/register';
import { passwordHelper } from "@/helper";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();

    const users = [
        {
            name: "Sanket Jariwala",
            email: "admin@example.com",
            password: passwordHelper.makePassword("admin"),
            role: "admin",
            is_active: true,
        },
    ]

    await knex("users").insert(users);
}