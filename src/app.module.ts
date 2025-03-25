import { Module, Logger, ConsoleLogger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
// import configuration from './config/configuration';
console.log()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI as string),
  UserModule,
  AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
