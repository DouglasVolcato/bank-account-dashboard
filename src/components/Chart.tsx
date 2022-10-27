import { useAccount } from "../hooks/account";
import { Movimentation } from "../protocols/movimentation-interface";
import "../styles/Chart.css";

export function Chart() {
  const { movimentations, totalMovimented } = useAccount().getInformation();

  const movimentationsToShow = movimentations;

  if (movimentationsToShow.length > 25) {
    const count = movimentationsToShow.length - 25;
    for (let i = 1; i <= count; i++) {
      movimentationsToShow.shift();
    }
  }

  function getBarSize(value: number, type: string, location: string) {
    let heightValue: number;

    if (type.toUpperCase() === "DEPOSIT" && location === "positive") {
      heightValue = (value * 100) / totalMovimented;
    } else if (type.toUpperCase() === "WITHDRAW" && location === "negative") {
      heightValue = (value * 100) / totalMovimented;
    } else {
      heightValue = 0;
    }

    return {
      height: heightValue.toString() + "%",
      margin: (100 - heightValue).toString() + "%",
    };
  }

  return (
    <div className="Chart">
      {movimentationsToShow.map((movimentation: Movimentation) => {
        return (
          <div className="Chart-bar">
            <div className="Chart-bar_div">
              <div
                style={{
                  height: getBarSize(
                    movimentation.value,
                    movimentation.type,
                    "positive"
                  ).margin,
                }}
              ></div>
              <div
                className="Chart-bar_positive"
                style={{
                  height: getBarSize(
                    movimentation.value,
                    movimentation.type,
                    "positive"
                  ).height,
                  backgroundColor: "green",
                }}
              ></div>
            </div>
            <div
              className="Chart-bar_negative"
              style={{
                height: getBarSize(
                  movimentation.value,
                  movimentation.type,
                  "negative"
                ).height,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
