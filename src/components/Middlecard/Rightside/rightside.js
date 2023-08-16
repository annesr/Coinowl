import React from "react";
import CountdownTimer from "./countdowntimer";
import InfoBlock from "./squareboxes";

const Rightside = () => {
  return (
    <div>
      <div className="flex justify-end">
        <CountdownTimer />
      </div>
      <div className="flex gap-4">
        <InfoBlock
          label="Market Cap"
          value={364678348283}
          showProgressBar={false}
        />
        <InfoBlock
          label="Circulating Supply"
          showProgressBar={true}
          customValues={{
            value: "26.6M",
            percentageVisible: 26,
          }}
        />
        <InfoBlock
          label="24h Trading vol"
          value={364678348283}
          showProgressBar={false}
        />
        <InfoBlock
          label="Next Unlock Amt"
          customValues={{
            value: "200M",
            ValueVisible: "$10M",
          }}
          showProgressBar={false}
        />
      </div>
      <div className="flex gap-4">
        <InfoBlock label="FDV" value={364678348283} showProgressBar={false} />
        <InfoBlock
          label="Total Supply"
          value={364678348283}
          showProgressBar={false}
        />
        <InfoBlock
          label="Max Supply"
          value={364678348283}
          showProgressBar={false}
        />
        <InfoBlock
          label="Unlocked Supply"
          showProgressBar={true}
          customValues={{
            value: "26.6M",
            percentageVisible: 26,
          }}
        />
      </div>
    </div>
  );
};

export default Rightside;
