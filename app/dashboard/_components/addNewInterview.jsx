"use client";

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import InterviewForm from './interviewForm';

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div>
            <div
                className="py-6 px-8 border-2 rounded-xl bg-blue-600 hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out mt-6 w-fit mx-auto"
                onClick={() => setOpenDialog(true)}
            >
                <h2 className="font-semibold text-xl text-white text-center">
                    <span className="mr-2">+</span> Add New Resume
                </h2>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>

                <DialogContent className="max-w-[85vw] max-h-[95vh] h-full w-full overflow-y-auto">
                <DialogTitle></DialogTitle>
                    <div className="mt-6 px-4">
                        <InterviewForm onClose={() => setOpenDialog(false)} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewInterview;