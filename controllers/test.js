const test = {
    index: async (req, res) => {

        const data = {
            title: "Activity",

            metrics: [
                {
                    title: "Total nagkagusto kay ardee",
                    value: "1,250",
                    percentage: "+12.5%"
                },
                {
                    title: "Total facecard credits",
                    value: "₱45,890",
                    percentage: "+8.2%"
                },
                {
                    title: "mga pinaiyak",
                    value: "356",
                    percentage: "+5.4%"
                },
                {
                    title: "Pending manliligaw",
                    value: "24",
                    percentage: "-2.1%"
                }
            ],

            transactions: [
                {
                    name: "Ellen Muron",
                    email: "Ellen@gmail.com",
                    amount: "₱1,500",
                    status: "Completed"
                },
                {
                    name: "Patrick Firmaload",
                    email: "Firmaload@gmail.com",
                    amount: "₱2,350",
                    status: "Pending"
                },
                {
                    name: "Jicel Crisostomo",
                    email: "Crushkoardee@gmail.com",
                    amount: "₱850",
                    status: "Completed"
                },
                {
                    name: "ARdee pogi",
                    email: "Pogi@gmail.com",
                    amount: "₱3,200",
                    status: "Processing"
                },
                {
                    name: "Joes postacio chocolate",
                    email: "josie@gmail.com",
                    amount: "₱1,750",
                    status: "Completed"
                }
            ]
        };

        res.render("page1", data);
    }
};

export { test };