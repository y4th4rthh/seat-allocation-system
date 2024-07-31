import { useState } from 'react';
import styles from './FormStepThree.module.css';
import toast from 'react-hot-toast';

const FileUpload = ({ fileUploads, setFileUploads }) => {
    const [fileName1, setfileName1] = useState('');
    const [fileName2, setfileName2] = useState('');

    const onPhotoUploadHandler = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.size > 200 * 1024) {
            toast.error('File size must be less than or equal to 200KB.', {
                duration: 5000,
            });
            return;
        }
        setfileName1(selectedFile.name);
        setFileUploads(prevState => ({
            ...prevState,
            selectedPhoto: selectedFile
        }), toast.success('Document Uploded.'));
    };

    const onSignUploadHandler = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.size > 200 * 1024) {
            toast.error('File size must be less than or equal to 200KB.', {
                duration: 5000,
            });
            return;
        }
        setfileName2(selectedFile.name);
        setFileUploads(prevState => ({
            ...prevState,
            selectedSign: selectedFile
        }),
            toast.success('Document Uploded.'));
    };


    return (
        <>
            <div className={`flex flex-col  justify-center my-1 min-h-96`}>
                <div className="flex flex-col space-y-4">
                    <div className='flex flex-col m-4'>
                        <p className='text-red-500 font-semibold'>File size must be less than or equal to 200KB. (File format : .jpg,.jpeg,.png)</p>

                        <div className="flex flex-col lg:flex-row md:mt-4 py-4 border-2 rounded-md">
                            <div className=" w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50 px-6 py-3 text-left text-md font-semibold text-indigo-500 uppercase tracking-wider">
                                    Document
                                </div>
                                <div className="bg-white px-6 py-4 whitespace-nowrap font-semibold">
                                    Photo
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50 px-6 py-3 text-left text-md font-semibold text-indigo-500 uppercase tracking-wider">
                                    Specification
                                </div>
                                <div className="bg-white px-6 py-4 whitespace-nowrap text-wrap font-semibold">
                                    Passport size photo with white background. (Face should be detectable.)
                                </div>
                            </div>
                            <div className="w-full lg:w-2/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50 px-6 py-3 text-left text-md font-semibold text-indigo-500 uppercase tracking-wider">
                                    Upload File
                                </div>
                                <div className="bg-white px-6 py-4 whitespace-nowrap">
                                    <div className='flex justify-center'>
                                        <label htmlFor="fileUpload1" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mx-4 cursor-pointer">
                                            Choose File
                                        </label>
                                        <input type="file" accept='.jpg,.jpeg,.png' onChange={onPhotoUploadHandler} className='' style={{ display: 'none' }} id="fileUpload1" />
                                    </div>
                                    <div className='flex self-center'>
                                        {fileName1 && <span className="mx-4">{fileName1}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50 px-6 py-3 text-left text-md font-semibold text-indigo-500 uppercase tracking-wider">
                                    View
                                </div>
                                <div className="bg-white px-6 py-4 whitespace-nowrap flex justify-center">
                                    {fileUploads.selectedPhoto ? (
                                        <img src={URL.createObjectURL(fileUploads.selectedPhoto)} alt="" className={styles.imageStyle} />
                                    ) : (
                                        <span className={`mx-4`}>Image can be viewed after choosing</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row md:mt-4 py-4 border-2 rounded-md">
                            <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50 px-6 py-3 text-left text-md font-semibold text-indigo-500  uppercase tracking-wider ">
                                    Document
                                </div>
                                <div className="bg-white px-6 py-4 whitespace-nowrap font-semibold">
                                    Signature
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50 px-6 py-3 text-lefttext-md font-semibold text-indigo-500 uppercase tracking-wider">
                                    Specification
                                </div>
                                <div className="bg-white px-6 py-4 font-semibold whitespace-nowrap text-wrap">
                                    Signature should be clearly visible and detectable.
                                </div>
                            </div>
                            <div className="w-full lg:w-2/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50 px-6 py-3 text-left text-md font-semibold text-indigo-500 uppercase tracking-wider">
                                    Upload File
                                </div>
                                <div className="bg-white px-6 py-4 whitespace-nowrap">
                                    <div className='flex justify-center'>
                                        <label htmlFor="fileUpload2" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mx-4 cursor-pointer">
                                            Choose File
                                        </label>
                                        <input type="file" accept='.jpg,.jpeg,.png' onChange={onSignUploadHandler} className='' style={{ display: 'none' }} id="fileUpload2" />
                                    </div>
                                    <div className='flex self-center'>
                                        {fileName2 && <span className="mx-4">{fileName2}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                <div className="bg-indigo-50  px-6 py-3 text-left text-md font-semibold text-indigo-500  uppercase tracking-wider">
                                    View
                                </div>
                                <div className="bg-white px-6 py-4 whitespace-nowrap flex justify-center">
                                    {fileUploads.selectedSign ? (
                                        <img src={URL.createObjectURL(fileUploads.selectedSign)} alt="" className={styles.imageStyle} />
                                    ) : (
                                        <span className={`mx-4`}>Image can be viewed after choosing</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileUpload;
