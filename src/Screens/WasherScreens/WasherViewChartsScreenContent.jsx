import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/authContext";
import IncomeChart from "../../Components/Charts/IncomeChart";

import useApi from "../../hooks/useApi";
import bookingsApi from "../../api/bookings";
import washersApi from "../../api/washers";

export default function WasherViewChartsScreenContent() {
    const { user, setUser } = useContext(AuthContext);
    const [allIncomes, setAllIncomes] = useState(null);
    const [doWeHaveData, setDoWeHaveData] = useState(false);
    const { request: getIncome } = useApi(washersApi.getWasherIncome);

    const getAllIncomes = async () => {
        try {
            const result = await getIncome(user.credential_id);
            setAllIncomes(result.data);
            setDoWeHaveData(true);
        } catch (error) {}
    };

    useEffect(() => {
        getAllIncomes();
        return () => {};
    }, []);

    return (
        <div>
            <h3>Payment Charts</h3>

            {doWeHaveData && <IncomeChart dataToPlot={allIncomes} />}
        </div>
    );
}
