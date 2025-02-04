const RemainingImagesIndicator = ({ count, onClick }:any) => (
    <div className="remaining-images-indicator" onClick={onClick}>
      + {count} more
    </div>
  );
  
  export default RemainingImagesIndicator;