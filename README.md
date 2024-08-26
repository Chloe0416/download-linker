# file-link-downloader

A simple utility for downloading files from a URL and saving them with a specified filename.

## Installation

You can install `file-link-downloader` via npm:

```bash
npm install file-link-downloader
```

## Usage

Import the `download` function and use it in your project:

```javascript
import download from 'file-link-downloader';

const fileUrl = 'https://example.com/file.pdf';
const filename = 'downloaded-file.pdf';

download(fileUrl, filename)
  .then(() => {
    console.log('Download successful!');
  })
  .catch((error) => {
    console.error('Download failed:', error);
  });
```

### Parameters

- `url: string` - The URL of the file you want to download.
- `filename: string` - The name you want to give the downloaded file.

### Returns

- A `Promise<void>` that resolves when the download is successful or rejects with an error.

## Features

- Simple and easy-to-use API.
- Handles errors gracefully.
- Automatically creates and triggers a download link.
- Compatible with modern browsers.

## TypeScript Support

`file-link-downloader` is written in TypeScript and includes type definitions.

```typescript
import download from 'file-link-downloader';

download('https://example.com/file.jpg', 'image.jpg');
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Author

Created by [chloe0416].
