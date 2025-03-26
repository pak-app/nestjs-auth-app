import { Module, Logger, ConsoleLogger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
// import configuration from './config/configuration';
console.log()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        const username = config.get('MONGO_INITDB_ROOT_USERNAME');
        const password = config.get('MONGO_INITDB_ROOT_PASSWORD');
        const host = config.get('DATABASE_HOST'); // 'localhost' for host machine
        const port = config.get('DATABASE_PORT');
        const db = config.get('DATABASE_NAME');

        const uri = `mongodb://${username}:${password}@${host}:${port}/${db}?authSource=admin`;

        console.log('[MongoDB URI]', uri); // ✅ Optional debug
        return { uri };
      },
      inject: [ConfigService],
    }),
  UserModule,
  AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
