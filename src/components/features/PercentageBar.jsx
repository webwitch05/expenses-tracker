function PercentageBar({width}) {
  return (
    <> 
        <div id="percentage-bar">
            <div id="percentage" style={{width: `${width}%`}}>
                <img src="images/cherryblossom-bg2.png"/>
            </div>
        </div>
    </>
  );
}

export default PercentageBar