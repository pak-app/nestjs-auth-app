import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
// import configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.DATABASE_CONTAINER_NAME}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`),
  UserModule,
  AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
