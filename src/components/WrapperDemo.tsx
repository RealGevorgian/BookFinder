import { useState } from "react";
import ConditionalWrapper from "./ConditionalWrapper";
import "./WrapperDemo.css";        // optional pretty border style

export default function WrapperDemo() {
    const [highlight, setHighlight] = useState(false);

    return (
        <div className="demo">
            <label>
                <input
                    type="checkbox"
                    checked={highlight}
                    onChange={(e) => setHighlight(e.target.checked)}
                />
                highlight
            </label>

            <ConditionalWrapper
                condition={highlight}
                wrapper={(children) => <div className="highlight-box">{children}</div>}
            >
                <p>This paragraph is conditionally wrapped.</p>
            </ConditionalWrapper>
        </div>
    );
}
