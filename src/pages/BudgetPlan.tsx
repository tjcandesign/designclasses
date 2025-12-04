import React from 'react';
import workhorseStudioImg from '../assets/workhorse-studio-2012.jpg';
import ChartBar from '../components/ChartBar';
import ChartPie from '../components/ChartPie';

const BudgetPlan: React.FC = () => {
    return (
        <div className="budget-plan-page">
            <section className="hero-section py-xl border-b">
                <div className="container">
                    <div className="grid">
                        <div className="col-span-12 mb-md">
                            <h1 className="text-3xl uppercase mb-sm">The 2026 Tj Plan!</h1>
                            <p className="text-xl text-muted">How im making this all work, for me!</p>
                            <p className="mt-md font-medium">By Tj Cichecki Dec 1, 2025</p>
                        </div>
                        <div className="col-span-12">
                            <img
                                src={workhorseStudioImg}
                                alt="Workhorse Studio 2012"
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                                style={{ maxHeight: '600px', objectFit: 'cover' }}
                            />
                            <p className="text-sm text-muted mt-sm italic">Workhorse Studio 2012. Before it all began</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="intro-section py-lg border-b">
                <div className="container">
                    <div className="grid">
                        <div className="col-span-12 md:col-span-8">
                            <h2 className="text-2xl mb-md">2026 Personal and Workhorse Financial Plan</h2>
                            <p className="mb-md text-lg">
                                This plan outlines how to cover all personal financial obligations, maintain the studio independently, strengthen Workhorse operations, and build predictable recurring income streams through classes and coffee pop ups.
                            </p>
                            <p className="text-lg">
                                It includes a new reimbursement model for the studio rent, a sustainable project allocation formula, and a long term strategy for stability and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="obligations-section py-lg border-b">
                {/* Bar chart for personal obligations */}
                <div className="my-8">
                    <ChartBar
                        labels={["Loan payment", "Studio rent", "Savings contribution", "Required income"]}
                        data={[633.25, 2700, 2500, 4766.24]}
                        label="Monthly Personal Obligations"
                    />
                </div>
                <div className="container">
                    <div className="grid">
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="text-xl mb-md font-bold">Monthly Personal Obligations</h3>
                            <ul className="space-y-sm mb-md">
                                <li className="flex justify-between border-b py-xs">
                                    <span>Loan payment</span>
                                    <span className="font-mono">633.25</span>
                                </li>
                                <li className="flex justify-between border-b py-xs">
                                    <span>Studio rent</span>
                                    <span className="font-mono">2,700.00</span>
                                </li>
                                <li className="flex justify-between border-b py-xs">
                                    <span>Personal savings contribution</span>
                                    <span className="font-mono">2,500.00</span>
                                </li>
                            </ul>
                            <div className="bg-gray-100 p-md rounded-sm">
                                <div className="flex justify-between mb-xs">
                                    <span className="font-medium">Gross monthly personal income required</span>
                                    <span className="font-mono font-bold">$4,766.24</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Annual gross income required</span>
                                    <span className="font-mono font-bold">$57,194.88</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 flex items-center bg-black text-white p-lg">
                            <p className="text-xl font-medium leading-tight">
                                Goal for 2026: earn at least $60,000 personally from Workhorse and classes without using savings and without disrupting SBA loan payments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="snapshot-section py-lg border-b">
                <div className="container">
                    <div className="grid">
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="text-xl mb-md font-bold">Workhorse Financial Snapshot</h3>
                            <ul className="space-y-sm">
                                <li className="flex justify-between border-b py-xs">
                                    <span>Monthly Workhorse expenses</span>
                                    <span className="font-mono">2,500</span>
                                </li>
                                <li className="flex justify-between border-b py-xs">
                                    <span>Company cash balance</span>
                                    <span className="font-mono">66,867.42</span>
                                </li>
                                <li className="flex justify-between border-b py-xs">
                                    <span>Company credit card debt</span>
                                    <span className="font-mono text-red-500">17,953.23</span>
                                </li>
                                <li className="flex justify-between border-b py-xs">
                                    <span>Company liabilities (SBA loan)</span>
                                    <span className="font-mono text-red-500">300,000</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 flex items-center">
                            <p className="text-lg italic border-l-4 border-accent pl-md">
                                Workhorse is stable enough to grow through classes, operations fund contributions, and improved recurring revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reimbursement-section py-lg border-b bg-gray-50">
                <div className="container">
                    <h3 className="text-2xl mb-lg">Studio Rent Reimbursement Structure</h3>
                    <div className="grid">
                        <div className="col-span-12 md:col-span-6">
                            <p className="mb-md">The studio rent is a personal obligation, but the agency uses the space for a significant portion of revenue generating work.</p>
                            <h4 className="font-bold mb-sm uppercase text-sm tracking-wide">Reimbursement Formula</h4>
                            <p className="mb-sm">Every month, calculate two percentages:</p>
                            <ol className="list-decimal list-inside mb-md pl-sm">
                                <li className="mb-xs">Percentage of your working hours spent on agency client work</li>
                                <li>Percentage of studio space used for agency work (est. 60%)</li>
                            </ol>
                            <p>Add the two percentages and divide by two. This becomes the reimbursement percentage for that month.</p>
                        </div>
                        <div className="col-span-12 md:col-span-6 bg-white p-md border border-gray-200 shadow-sm">
                            <h4 className="font-bold mb-md uppercase text-sm tracking-wide text-accent">Example Calculation</h4>
                            <p className="mb-sm text-sm text-muted">If 50% hours agency work + 60% space utilization:</p>
                            <p className="font-mono mb-md text-lg">(50 + 60) / 2 = 55%</p>

                            <div className="flex justify-between border-b py-xs mb-xs">
                                <span>Studio reimbursed by Workhorse</span>
                                <span className="font-mono font-bold">$1,485</span>
                            </div>
                            <div className="flex justify-between py-xs">
                                <span>Personal share of rent</span>
                                <span className="font-mono font-bold">$1,215</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="operations-section py-lg border-b">
                <div className="container">
                    <div className="grid">
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="text-xl mb-md font-bold">Workhorse Operations Fund</h3>
                            <p className="text-2xl mb-md font-medium">10% of gross revenue from every client project is allocated to the Operations Fund.</p>
                            <p>The Operations Fund ensures Workhorse remains sustainable and helps reduce financial stress on the partners.</p>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h4 className="font-bold mb-sm uppercase text-sm tracking-wide">Supports</h4>
                            <ul className="grid grid-cols-2 gap-sm">
                                <li className="border p-sm">Monthly overhead ($2,500)</li>
                                <li className="border p-sm">Equipment & capital improvements</li>
                                <li className="border p-sm">Marketing & web development</li>
                                <li className="border p-sm">Software & systems upgrades</li>
                                <li className="border p-sm">Bookkeeping & tax prep</li>
                                <li className="border p-sm">Future hiring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="allocation-section py-lg border-b">
                <div className="container">
                    <h3 className="text-xl mb-lg font-bold">Updated Project Revenue Allocation Model</h3>
                    <div className="grid">
                        <div className="col-span-12 md:col-span-5">
                            <div className="steps space-y-md">
                                <div className="step">
                                    <span className="block text-sm font-bold text-accent uppercase mb-xs">Step 1</span>
                                    <p className="text-lg">10% to Operations Fund</p>
                                </div>
                                <div className="step">
                                    <span className="block text-sm font-bold text-accent uppercase mb-xs">Step 2</span>
                                    <p className="text-lg">5% to Abe for admin/invoicing</p>
                                </div>
                                <div className="step">
                                    <span className="block text-sm font-bold text-accent uppercase mb-xs">Step 3</span>
                                    <p className="text-lg">Remaining split based on involvement</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7 bg-gray-50 p-md">
                            <h4 className="font-bold mb-md uppercase text-sm tracking-wide">Example: VelocityOne Website ($12,000)</h4>
                            <div className="space-y-xs">
                                <div className="flex justify-between">
                                    <span>Operations Fund</span>
                                    <span className="font-mono">$1,200</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Abe admin overhead</span>
                                    <span className="font-mono">$600</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-300 pt-xs mt-xs font-medium">
                                    <span>Remaining revenue</span>
                                    <span className="font-mono">$10,200</span>
                                </div>
                                <div className="pl-md border-l-2 border-accent mt-sm space-y-xs">
                                    <div className="flex justify-between">
                                        <span>You (80% involvement)</span>
                                        <span className="font-mono">$8,160</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Abe (20% involvement)</span>
                                        <span className="font-mono">$2,040</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="revenue-streams-section py-lg border-b">
                {/* Pie chart for recurring income */}
                <div className="my-8 max-w-md mx-auto">
                    <ChartPie
                        labels={["Classes", "Coffee", "Rent reimbursement"]}
                        data={[1920, 500, 1350]}
                        label="Recurring Income Breakdown"
                    />
                </div>
                <div className="container">
                    <div className="grid">
                        <div className="col-span-12 md:col-span-6 pr-md">
                            <h3 className="text-xl mb-md font-bold">Class Based Revenue</h3>
                            <p className="mb-md text-sm text-muted">Personal income, not split with company.</p>

                            <div className="grid grid-cols-2 gap-md mb-md">
                                <div>
                                    <h4 className="text-sm font-bold uppercase mb-xs">Structure</h4>
                                    <ul className="text-sm space-y-xs">
                                        <li>2 classes/month</li>
                                        <li>6 students/class (initially)</li>
                                        <li>$160/student</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase mb-xs">Revenue</h4>
                                    <ul className="text-sm space-y-xs">
                                        <li>Base: $1,920/mo</li>
                                        <li>Expanded: $2,560/mo</li>
                                        <li>Annual: $23k - $30k</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 pl-md border-l border-gray-200">
                            <h3 className="text-xl mb-md font-bold">Coffee Pop Up Revenue</h3>
                            <p className="mb-md text-sm text-muted">Personal income + agency marketing.</p>
                            <ul className="mb-md">
                                <li className="mb-xs">Merch: ornaments, coasters, accessories</li>
                                <li className="mb-xs">Monthly: $500 - $700</li>
                                <li>Annual: $6,000 - $8,400</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="summary-income-section py-xl bg-black text-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl mb-lg font-bold">Combined Personal Recurring Income</h3>
                        <div className="grid grid-cols-3 gap-md mb-lg text-left">
                            <div>
                                <span className="block text-sm text-gray-400 mb-xs">Classes</span>
                                <span className="text-xl font-mono">$1,920 - $2,560</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 mb-xs">Coffee</span>
                                <span className="text-xl font-mono">$500 - $700</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-400 mb-xs">Rent Reimbursement</span>
                                <span className="text-xl font-mono">$1,350 - $1,620</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 pt-lg">
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-sm">Conservative Monthly Recurring Total</p>
                            <p className="text-4xl font-bold text-accent mb-sm">$3,770</p>
                            <p className="text-gray-400">Before any client project payouts. Covers most monthly personal obligations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stability-section py-lg border-b">
                <div className="container">
                    <div className="grid">
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="text-xl mb-md font-bold">Financial Stability Path</h3>
                            <div className="mb-md">
                                <h4 className="font-bold mb-xs">For Personal Finances</h4>
                                <ul className="list-disc list-inside text-sm space-y-xs text-muted">
                                    <li>Predictable recurring revenue</li>
                                    <li>Studio partially reimbursed</li>
                                    <li>No need to draw from savings</li>
                                    <li>SBA loan remains protected</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-xs">For Workhorse</h4>
                                <ul className="list-disc list-inside text-sm space-y-xs text-muted">
                                    <li>Fair partner compensation</li>
                                    <li>Operations Fund stabilizes business</li>
                                    <li>Consistent cash for improvements</li>
                                    <li>Scalable model</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="text-xl mb-md font-bold">2026 Action Plan</h3>
                            <div className="space-y-md">
                                <div className="border-l-2 border-black pl-md">
                                    <h4 className="font-bold uppercase text-sm mb-xs">January 2026</h4>
                                    <ul className="text-sm space-y-xs">
                                        <li>Launch class schedule & payment system</li>
                                        <li>Implement rent reimbursement tracking</li>
                                        <li>Create financial trackers</li>
                                        <li>Prepare class materials & swag</li>
                                    </ul>
                                </div>
                                <div className="border-l-2 border-gray-300 pl-md">
                                    <h4 className="font-bold uppercase text-sm mb-xs">Quarter One</h4>
                                    <ul className="text-sm space-y-xs">
                                        <li>Expand classes to 8 students</li>
                                        <li>Evaluate cash flow</li>
                                        <li>Set Operations Fund reserve goal</li>
                                        <li>Explore hiring interns</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bankruptcy-section py-xl bg-red-50 border-t border-red-200">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-start mb-lg">
                            <div className="text-red-600 text-3xl mr-md">!</div>
                            <div>
                                <h3 className="text-2xl font-bold text-red-800 mb-sm">Bankruptcy Considerations for the SBA Loan</h3>
                                <p className="text-red-700">
                                    This section provides a high level overview of how SBA loans interact with personal and business bankruptcy scenarios.
                                    The purpose is not to signal intent to pursue bankruptcy, but to demonstrate an understanding of risks and to show how the 2026 financial plan is designed to prevent this outcome entirely.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-lg">
                            <div>
                                <h4 className="font-bold text-red-800 mb-xs">SBA Loans & Personal Guarantees</h4>
                                <p className="text-sm text-red-700 mb-md">
                                    Most SBA 7a loans require personal guarantees. If the business fails, the lender can pursue personal assets. Bankruptcy does not automatically eliminate this guarantee.
                                </p>

                                <h4 className="font-bold text-red-800 mb-xs">Chapter 7 vs 13</h4>
                                <p className="text-sm text-red-700">
                                    Chapter 7 may liquidate assets. Chapter 13 creates a repayment plan (3-5 years). Personal guarantees often remain active.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-800 mb-xs">Offer in Compromise (OIC)</h4>
                                <p className="text-sm text-red-700 mb-md">
                                    A negotiated settlement if the business cannot meet obligations. Requires asset liquidation and is not guaranteed.
                                </p>

                                <div className="bg-white p-md border border-red-200 rounded-sm shadow-sm">
                                    <h4 className="font-bold text-red-800 mb-xs uppercase text-xs tracking-wide">How Your 2026 Plan Avoids Risk</h4>
                                    <ul className="text-sm text-red-700 list-disc list-inside space-y-xs">
                                        <li>Increasing predictable monthly income</li>
                                        <li>Reimbursing studio rent</li>
                                        <li>Allocating 10% to Operations Fund</li>
                                        <li>Keeping SBA loan in good standing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="text-center font-bold text-red-800 uppercase tracking-widest text-sm">
                            Your financial plan eliminates the conditions that would make bankruptcy necessary.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BudgetPlan;
