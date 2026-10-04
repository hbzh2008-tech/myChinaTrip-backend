# ChinaTrip API（Spring Boot 3）

HTTP API 子模块：`com.chinatrip.api`，默认端口 **3001**。

## 前置

- **JDK 17+**（推荐 Liberica：`winget install BellSoft.LibericaJDK.17`）
- 将 `JAVA_HOME` 指向 JDK 17（例如 `C:\Program Files\BellSoft\LibericaJDK-17`），避免系统默认 Java 8 干扰 Gradle
- 无需 Node/pnpm（本模块已脱离 JS 工具链）
- 国内网络：Gradle 分发与 Maven 已配置腾讯云 / 阿里云镜像（见 `gradle/wrapper/gradle-wrapper.properties` 与 `build.gradle`）

## 常用命令

```powershell
# Windows
.\gradlew.bat test
.\gradlew.bat bootRun

# Unix
./gradlew test
./gradlew bootRun
```

## 与 `packages/shared` 的契约

REST JSON 形状以 Harness 内 `packages/shared` 的 Zod schema 为**文档真相源**；Java DTO 须与之对齐（首个能力域稳定后可引入 OpenAPI 生成/校验）。

当前：`GET /health` → `{ "ok": true, "service": "api" }`。
