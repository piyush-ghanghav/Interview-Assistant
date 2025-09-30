"use client";

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import InterviewForm from './interviewForm';

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div>
            <div
                className="py-8 px-8 mx-auto my-2 rounded-xl bg-blue-600 hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out w-fit"
                onClick={() => setOpenDialog(true)}
            >
                <h2 className="font-semibold text-xl text-white text-center">
                    <span className="mr-2">+</span> Add New Resume
                </h2>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>

                <DialogContent className="max-w-[60vw] max-h-[95vh] overflow-y-auto">
                        <InterviewForm onClose={() => setOpenDialog(false)} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewInterview;