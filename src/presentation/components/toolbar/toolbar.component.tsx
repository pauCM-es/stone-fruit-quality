import Toolbar, { Item } from "devextreme-react/toolbar";

const ToolbarCatalogue = () => {

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
      alert('Add button has been clicked!');
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
    </>
  )
}

export default ToolbarCatalogue