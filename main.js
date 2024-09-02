ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



function App() {
    const header = "Quick Start"
    const headerContent = "Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis"
    const ulHeader = "You will learn"
    const li = ["How to create and nest components",
        'How to add markup and styles',
        'How to display data',
        'How to render conditions and lists',
        'How to respond to events and update the screen',
        'How to share data between components']
        .map(li=><li key={li}>{li}</li>)


    
    return (
        <div>
            <h1 >{header}</h1>
            <h3 >{headerContent}</h3>
            <div className="ctn">
                <p className="ul-header">{ulHeader}</p>
                <ul> 
                    {li}
                </ul>
            </div>
        </div>
    )
}