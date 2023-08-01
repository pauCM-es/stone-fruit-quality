import Toolbar, { Item } from "devextreme-react/toolbar";
import useModal from "../../utils/hooks/useModal";
import ModalWrapper from "../modal-wraper/modal-wrapper";
import NewEntryFormPopUp from "../../UI/catalogue/new-entry-form/new-entry-form.component";
import { useState } from "react";


const ToolbarCatalogue = () => {
  const [modalIsShowing, toggleModal] = useModal()
  const [isFormPopupVisible, setIsFormPopupVisible] = useState(false)

  const renderLabel = () => {
    return <div className="toolbar__label">Catalogo de defectos en fruta de hueso</div>;
  }
  const backButtonOptions = {
    icon: 'back',
    onClick: () => {
      alert('Back button has been clicked!');
    },
  };

  const refreshButtonOptions = {
    icon: 'refresh',
    onClick: () => {
      alert('Refresh button has been clicked!');
    },
  };

  const addButtonOptions = {
    icon: 'plus',
    onClick: () => {
      setIsFormPopupVisible(true);
      console.log("modal ", modalIsShowing)
    },
  };

  const saveButtonOptions = {
    text: 'Save',
    onClick: () => {
      alert('Save option has been clicked!');
    },
  };

  const printButtonOptions = {
    text: 'Print',
    onClick: () => {
      alert('Print option has been clicked!');
    },
  };

  const settingsButtonOptions = {
    text: 'Settings',
    onClick: () => {
      alert('Settings option has been clicked!');
    },
  };

  return (
    <>
      <Toolbar>
        <Item location="before"
          widget="dxButton"
          options={ backButtonOptions }
        />
        <Item location="before"
          widget="dxButton"
          options={ refreshButtonOptions }
        />
        <Item location="center"
          locateInMenu="never"
          render={ renderLabel } />
        <Item location="after"
          locateInMenu="auto"
          widget="dxButton"
          options={ addButtonOptions }
        />
        <Item locateInMenu="always"
          widget="dxButton"
          options={ saveButtonOptions }
        />
        <Item locateInMenu="always"
          widget="dxButton"
          options={ printButtonOptions }
        />
        <Item locateInMenu="always"
          widget="dxButton"
          options={ settingsButtonOptions }
        />
      </Toolbar>
      <NewEntryFormPopUp isFormPopupVisible={ isFormPopupVisible } setIsFormPopupVisible={ setIsFormPopupVisible } />
    </>
  )
}

export default ToolbarCatalogue