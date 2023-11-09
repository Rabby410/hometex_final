import React, { useState, useEffect, useRef } from 'react';
import { FaFileInvoice } from 'react-icons/fa';

const Invoice = () => {
    const [showInvoice, setShowInvoice] = useState(false);
    const invoiceRef = useRef(null);

    const toggleInvoice = () => {
        setShowInvoice(!showInvoice);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (invoiceRef.current && !invoiceRef.current.contains(event.target)) {
                setShowInvoice(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setShowInvoice(false);
            }
        };

        if (showInvoice) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [showInvoice]);

    const printInvoice = () => {
        const invoiceContent = invoiceRef.current.innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.open();
        printWindow.document.write(`
            <html>
                <head>
                    <title>Invoice</title>
                    <style>
                        @media print {
                            body {
                                padding: 1rem;
                            }
                        }
                    </style>
                </head>
                <body>
                    ${invoiceContent}
                    <script>
                        window.onload = function() {
                            window.print();
                            window.onafterprint = function() {
                                window.close();
                            };
                        };
                    </script>
                </body>
            </html>
        `);
        printWindow.document.close();
    };

    return (
        <>
            <td className="border-b py-2" onClick={toggleInvoice}>
                <FaFileInvoice />
            </td>

            {showInvoice && (
                <div
                    className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
                >
                    <div ref={invoiceRef} className="bg-white shadow-md p-8">
                        <div className="bg-white shadow-md p-8 max-w-lg mx-auto">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold">Invoice</h1>
                                    <p className="text-gray-600">123 Main Street, City, Country</p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Order #123456</h2>
                                    <p className="text-gray-600">Date: May 16, 2023</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Customer Details</h3>
                                <p className="text-gray-600">John Doe</p>
                                <p className="text-gray-600">john.doe@example.com</p>
                                <p className="text-gray-600">1234 Street, City, Country</p>
                            </div>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Product</th>
                                        <th className="text-left font-semibold">Quantity</th>
                                        <th className="text-left font-semibold">Price</
                                        th>
                                        <th className="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product 1</td>
                                        <td>2</td>
                                        <td>$10.00</td>
                                        <td>$20.00</td>
                                    </tr>
                                    <tr>
                                        <td>Product 2</td>
                                        <td>1</td>
                                        <td>$15.00</td>
                                        <td>$15.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3" className="text-right pr-4 font-semibold">
                                            Subtotal
                                        </td>
                                        <td>$35.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-right pr-4 font-semibold">
                                            Tax (10%)
                                        </td>
                                        <td>$3.50</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-right pr-4 font-semibold">
                                            Grand Total
                                        </td>
                                        <td>$38.50</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="mt-8 flex justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={printInvoice}
                                >
                                    Print
                                </button>
                            </div>
                        </div>
                        <button
                            className="text-red-500 font-semibold"
                            onClick={toggleInvoice}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Invoice;