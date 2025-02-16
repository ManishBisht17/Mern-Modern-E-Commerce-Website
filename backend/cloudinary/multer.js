import multer from "multer";

const storage = multer.memoryStorage(); // Store image in memory (RAM)
const upload = multer({ storage });

export default upload;
