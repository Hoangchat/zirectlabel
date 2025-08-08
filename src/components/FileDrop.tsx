'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileDrop() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      console.log('Uploaded file:', file);
      // Bạn có thể upload lên server tại đây nếu cần
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'audio/mpeg': ['.mp3'], 'audio/wav': ['.wav'] },
    multiple: false,
  });

  return (
    <div className="space-y-6">
      {!uploadedFile ? (
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-white shadow-lg cursor-pointer transition hover:shadow-xl"
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl">➕</div>
            <p className="font-bold text-xl">Drop your track</p>
            <p className="text-sm text-gray-600">
              MP3 or WAV. Your track will be uploaded to our servers.<br />
              By uploading, you agree to our{' '}
              <a href="/terms" className="underline text-blue-600">Terms of Service</a>.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg p-8 rounded-lg space-y-6 border border-green-500">
          <div className="text-green-600 font-semibold text-center">
            "{uploadedFile.name}" successfully uploaded!
          </div>

          <div className="w-full h-2 bg-green-100 rounded-full">
            <div className="bg-green-500 h-2 rounded-full w-full transition-all duration-500" />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Tell us more about your track</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Track Name" className="input" />
              <input type="text" placeholder="Genre Family" className="input" />
              <input type="text" placeholder="Genre" className="input" />
              <input type="text" placeholder="Subgenre" className="input" />
              <input type="text" placeholder="Your Location" className="input md:col-span-2" />
              <input type="text" placeholder="Mood Tags" className="input md:col-span-2" />
            </div>

            <div className="flex items-center space-x-4">
              <label className="font-medium">Did other Artists/Vocalists participate?</label>
              <input type="checkbox" />
            </div>

            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
