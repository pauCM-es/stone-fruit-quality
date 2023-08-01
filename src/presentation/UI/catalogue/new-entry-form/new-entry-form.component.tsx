import Popup from 'devextreme-react/popup';

type NewEntryFormPopUpType = {
  isFormPopupVisible: boolean
  setIsFormPopupVisible: (arg: boolean) => void
}

const NewEntryFormPopUp = ({ isFormPopupVisible, setIsFormPopupVisible }: NewEntryFormPopUpType) => {

  const togglePopup = () => {
    setIsFormPopupVisible(!isFormPopupVisible);
  };
  return (
    <div className="App">
      <Popup
        visible={ isFormPopupVisible }
        hideOnOutsideClick={ true }
        onHiding={ togglePopup }
        showTitle={ true }
        title="New Entry Form"
        width={ 500 }
        height={ 700 }
        resizeEnabled={ true }
        position="center"
      />
    </div>
  );
}

export default NewEntryFormPopUp;