import { Controller, Get, Param, Body, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('home')
  getadmin(): object {
    return this.adminService.getadmin();
  }

  @Get('adminByName/:name')
  getAdminByName(@Param('name') name: string) {
    return this.adminService.getAdminByName(name);
  }

  @Get('getAdmin')
  getAdmin(@Body() myobj: object): object {
    return this.adminService.getAdmin(myobj);
  }

  @Post('addAdmin')
  addAdmin(@Body() myobj: object): object {
    return this.adminService.getAdmin(myobj);
  }

  @Put('updateAdmin/:id')
  updateAdmin(@Body() myobj: object, @Param('id') id: number): object {
    return this.adminService.updateAdmin(myobj, id);
  }
}
