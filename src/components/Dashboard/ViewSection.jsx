import { useState } from "react";
import ViewForm from "./ViewForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ViewSection = ({ basicDetails, cityChoices, fileUploads }) => {
    const navigate = useNavigate();

    const printForm = () => {
        //alert("Form submitted successfully!");
        console.log("print button clicked!");
        // window.print();

    };

    const editForm = () => {
        //alert("Edit Form!");
        navigate("/form");
        console.log("edit Form clicked!");
        toast.success("edit Form clicked!", {
            duration: 5000,
            icon: 'ℹ️'
        });
    };

    console.log("selectedPhoto in viewSection: ", fileUploads.selectedPhoto);
    return (
        <>
            <div className="flex flex-col self-center p-6 h-full">
                <div className="flex flex-col shrink self-center border-2 p-4 m-4">
                    <ViewForm basicDetails={basicDetails} cityChoices={cityChoices} fileUploads={fileUploads} />
                    <div className="flex justify-end">
                        {
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                                onClick={editForm}
                            >
                                Edit Form
                            </button>
                        }
                        {/* {
                            <div>
                                <button
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                                    onClick={printForm}
                                >
                                    Print Form
                                </button>
                            </div>
                        } */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewSection;
