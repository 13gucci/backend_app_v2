<!-- NPM Package must have -->

<!-- 1. Morgan -->

morgan là một middleware dùng để log các request HTTP từ client tới server trong các ứng dụng Node.js

5 modes style log:

-   dev
-   compile
-   common
-   short
-   tiny

<!-- 2. Helmet -->

Helmet helps secure Express apps by setting HTTP response headers.
Cross-Site Scripting (XSS), Clickjacking, và các cuộc tấn công khác.

-   Bảo vệ các thông tin mật của server

<!-- 3. Compression -->

GIẢM BĂNG THÔNG

Băng thông => tốn người dùng, tốn cả của chúng ta

compression là một middleware trong Node.js, thường được sử dụng với Express.js, để nén các phản hồi HTTP. Bằng cách sử dụng compression, bạn có thể giảm kích thước của dữ liệu được gửi từ server đến client, giúp cải thiện thời gian tải trang và giảm băng thông sử dụng.
