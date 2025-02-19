import "./Price.css";

const Price = () => {
    return (
        <>
            <div className="ml">
                <h2 className="sidebar-title price-title">Price</h2>

                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test2" />
                    <span className="checkmark"></span>All
                </label>

                <input
                    value={50}
                    title="$0 - 50"
                    name="test2"
                />

                <input
                    value={100}
                    title="$50 - $100"
                    name="test2"
                />

                <input
                    value={150}
                    title="$100 - $150"
                    name="test2"
                />

                <input
                    value={200}
                    title="Over $150"
                    name="test2"
                />
            </div>
        </>
    );
};

export default Price;