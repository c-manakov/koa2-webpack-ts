/**
 * Created by Monyk on 05.11.2016.
 */

import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, Res} from "routing-controllers";
import User from '../models/User'
import {ServerResponse} from "http";

@Controller()
export class TestController
{

    @Get("/users")
    async getAll(@Res() res : ServerResponse)
    {
        return JSON.stringify(await User.findAll())
    }

    @Get("/users/:id")
    getOne(@Param("id") id:number)
    {
        return "This action returns user #" + id
    }

    @Post("/users")
    post(@Body() user:any)
    {
        return "Saving user..."
    }

    @Put("/users/:id")
    put(@Param("id") id:number, @Body() user:any)
    {
        return "Updating a user..."
    }

    @Delete("/users/:id")
    remove(@Param("id") id:number)
    {
        return "Removing user..."
    }

}