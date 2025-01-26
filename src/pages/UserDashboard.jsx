import React from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const data = useSelector((state) => state.loan.loan);
  console.log(data); // Inspect the data for debugging

  // Validate and parse values
  const loanRequired = parseFloat(data?.loanRequired) || 0;
  const loanDeposit = parseFloat(data?.loanDeposit) || 0;
  const monthsRequired = parseInt(data?.monthsRequired, 10) || 1; // Avoid division by 0

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">User Dashboard</h2>

      {data ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-secondary">Loan Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Name</span>
                <span className="text-lg font-semibold">{data.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Email</span>
                <span className="text-lg font-semibold">{data.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">CNIC</span>
                <span className="text-lg font-semibold">{data.cnic}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Loan Required</span>
                <span className="text-lg font-semibold text-primary">
                  PKR {loanRequired}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Loan Deposit</span>
                <span className="text-lg font-semibold text-secondary">
                  PKR {loanDeposit}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Months Required</span>
                <span className="text-lg font-semibold">
                  {monthsRequired} months
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Monthly Installment</span>
                <span className="text-lg font-semibold text-accent">
                  PKR {((loanRequired - loanDeposit) / monthsRequired).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning shadow-lg mt-6">
          <span>No loan data available.</span>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
