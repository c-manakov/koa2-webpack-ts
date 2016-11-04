/**
 * Created by Monyk on 05.11.2016.
 */

import {Controller, Param, Body, Get, Post, Put, Delete, JsonController} from "routing-controllers";

@Controller()
export class TestController {

    @Get("/")
    static getAll() {
        return 'Hello Koa!'
    }

    @Get("/users/:id")
    static getOne(@Param("id") id: number) {
        return "This action returns user #" + id
    }

    @Post("/users")
    static post(@Body() user: any) {
        return "Saving user..."
    }

    @Put("/users/:id")
    static put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user..."
    }

    @Delete("/users/:id")
    static remove(@Param("id") id: number) {
        return "Removing user..."
    }

}