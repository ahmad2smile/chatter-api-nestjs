import { NestFactory } from "@nestjs/core";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: "http://localhost:*",
	});

	app.useStaticAssets(join(__dirname, "..", "public"));

	await app.listen(3005);
}
bootstrap();
