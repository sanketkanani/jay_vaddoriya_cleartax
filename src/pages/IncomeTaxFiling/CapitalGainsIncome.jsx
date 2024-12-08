import { CaretRightOutlined } from '@ant-design/icons';
import { BBButton } from '@components';
import { Col, Collapse, Divider, Row, theme } from 'antd';

import { Tabs } from 'antd';
import { useState } from 'react';
import CGIDrawer from './CGIDrawer';
import ClearTaxTemplate from './Drawers/ClearTaxDrawer';
import AddEquityAndMutual from './Drawers/AddEquity';
import UsStocks from './Drawers/UsStocks';
import AddPropertyDetails from './Drawers/AddPropertyDetails';
import AddStockOption from './Drawers/AddStockOption';
import BondAndDebentures from './Drawers/BondAndDebentures';
import ImportBondBrokers from './Drawers/ImportBondBrokers';
import ImportGoldBrokers from './Drawers/ImportGoldBrokers';
import GoldJewelleryDetails from './Drawers/GoldJewellery';
import AddDeemed from './Drawers/AddDeemed';
import clsx from 'clsx';
import styles from "./IncomeTaxFiling.module.css";


const CapitalGainsIncome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStocks, setIsStocks] = useState(false);
  const [clearTaxTemplate, setClearTaxTemplate] = useState(false)
  const [addEquity, setAddEquity] = useState(false)
  const [addProperty, setAddProperty] = useState(false)
  const [addStockOption, setAddStockOption] = useState(false)
  const [addDeemed, setAddDeemed] = useState(false)
  const [bondAndDebentures, setBondAndDebentures] = useState(false)
  const [goldAndJewelleryDetails, setGoldAndJewelleryDetails] = useState(false)

  const showModal = () => setIsModalOpen(true);

  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'All Brokers',
      children: <>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20, lg: 26 },
            { xs: 10, sm: 15, md: 20, lg: 26 },
          ]}
          className="mb-4"
        >
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={showModal}>
              Zerodha
            </BBButton>
          </Col>
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={showModal}>
              Zerodha
            </BBButton>
          </Col>

          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={showModal}>
              Zerodha
            </BBButton>
          </Col>
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={showModal}>
              Zerodha
            </BBButton>
          </Col>
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={showModal}>
              Zerodha
            </BBButton>
          </Col>
        </Row>
        {
          isModalOpen && <CGIDrawer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        }
        <Divider />
        <h3 className='d-flex justify-content-center'>OR</h3>
        <Divider />
        <div>
          <h4>
            Don’t see your brokers above? Use Cleartax template
          </h4>
          <p className='my-3'>Add Stocks, Mutual Funds and F&O transactions to the template and Upload back
          </p>
          <p style={{ color: "#4340ef", fontWeight: "600", cursor: "pointer" }} onClick={() => setClearTaxTemplate(true)}>Upload ClearTax Template</p>
        </div>
        {
          clearTaxTemplate && <ClearTaxTemplate isModalOpen={clearTaxTemplate} setIsModalOpen={setClearTaxTemplate} />
        }
        <Divider />
        <h3 className='d-flex justify-content-center'>OR</h3>
        <Divider />
        <div>
          <h4>
            Add details manually
          </h4>
          <p className='my-3'>You can add the transaction details yourself if P&L reports from your broker are not available
          </p>
          <p style={{ color: "#4340ef", fontWeight: "600", cursor: "pointer" }} onClick={() => setAddEquity(true)}>Add details</p>
        </div>
        {
          addEquity && <AddEquityAndMutual isModalOpen={addEquity} setIsModalOpen={setAddEquity} />
        }
      </>,
    },
    {
      key: '2',
      label: 'Mutual Fund Brokers',
      children: 'Content of Tab Pane 2',
    },
  ];
  const UsStocksBroker = [
    {
      key: '1',
      label: 'All Brokers',
      children: <>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20, lg: 26 },
            { xs: 10, sm: 15, md: 20, lg: 26 },
          ]}
          className="mb-4"
        >
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              INDmoney
            </BBButton>
          </Col>
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              INDmoney
            </BBButton>
          </Col>

          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              INDmoney
            </BBButton>
          </Col>
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              INDmoney
            </BBButton>
          </Col>
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              INDmoney
            </BBButton>
          </Col>
        </Row>
        {
          isStocks && <UsStocks isModalOpen={isStocks} setIsModalOpen={setIsStocks} />
        }
        <Divider />
        <h3 className='d-flex justify-content-center'>OR</h3>
        <Divider />
        <div>
          <h4>
            {`Don't see your US Stocks Brokers? Use Custom Template`}
          </h4>
          <p className='my-3'>Download ClearTax template, add your P&L transactions, Save and Upload back
          </p>
          <p style={{ color: "#4340ef", fontWeight: "600", cursor: "pointer" }} onClick={() => setClearTaxTemplate(true)}>Use Standard File and Upload US Stocks
          </p>
        </div>
        {
          clearTaxTemplate && <ClearTaxTemplate isModalOpen={clearTaxTemplate} setIsModalOpen={setClearTaxTemplate} />
        }
        <Divider />
        <h3 className='d-flex justify-content-center'>OR</h3>
        <Divider />
        <div>
          <h4>
            Add details manually
          </h4>
          <p className='my-3'>You can add the transaction details yourself if P&L reports from your broker are not available
          </p>
          <p style={{ color: "#4340ef", fontWeight: "600", cursor: "pointer" }} onClick={() => setAddEquity(true)}>Add Foreign Gains manually</p>
        </div>
        {
          addEquity && <AddEquityAndMutual isModalOpen={addEquity} setIsModalOpen={setAddEquity} />
        }
      </>,
    }
  ];
  const Bonds = [
    {
      key: '1',
      label: 'All Brokers',
      children: <>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20, lg: 26 },
            { xs: 10, sm: 15, md: 20, lg: 26 },
          ]}
          className="mb-4"
        >
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              WintWealth
            </BBButton>
          </Col>
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              WintWealth
            </BBButton>
          </Col>
        </Row>
        {
          isStocks && <ImportBondBrokers isModalOpen={isStocks} setIsModalOpen={setIsStocks} />
        }
        <Divider />
        <h3 className='d-flex justify-content-center'>OR</h3>
        <Divider />
        <div>
          <h4>
            Add details manually
          </h4>
          <p className='my-3'>You can add the transaction details yourself if P&L reports from your broker are not available
          </p>
          <p style={{ color: "#4340ef", fontWeight: "600", cursor: "pointer" }} onClick={() => setBondAndDebentures(true)}>Add details</p>
        </div>
        {
          bondAndDebentures && <BondAndDebentures isModalOpen={bondAndDebentures} setIsModalOpen={setBondAndDebentures} />
        }
      </>,
    }
  ];
  const GoldJewellery = [
    {
      key: '1',
      label: 'All Brokers',
      children: <>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20, lg: 26 },
            { xs: 10, sm: 15, md: 20, lg: 26 },
          ]}
          className="mb-4"
        >
          <Col className="w-100" sm={{ span: 4 }}>
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setIsStocks(true)}>
              Gullak
            </BBButton>
          </Col>
        </Row>
        {
          isStocks && <ImportGoldBrokers isModalOpen={isStocks} setIsModalOpen={setIsStocks} />
        }
        <Divider />
        <h3 className='d-flex justify-content-center'>OR</h3>
        <Divider />
        <div>
          <h4>
            Add details manually
          </h4>
          <p className='my-3'>You can add the transaction details yourself if P&L reports from your broker are not available
          </p>
          <p style={{ color: "#4340ef", fontWeight: "600", cursor: "pointer" }} onClick={() => setGoldAndJewelleryDetails(true)}>Add details</p>
        </div>
        {
          goldAndJewelleryDetails && <GoldJewelleryDetails isModalOpen={goldAndJewelleryDetails} setIsModalOpen={setGoldAndJewelleryDetails} />
        }
      </>,
    }
  ];

  const getItems = (panelStyle) => [
    {
      key: '1',
      label: <>
        <h4>{`Stocks, Mutual Funds, Futures & Options(F&O) and Others`}</h4>
        <p>
          Import Stocks, Mutual Funds, Futures & Options (F&O), Derivatives, Currency, Commodity transactions from your broker seamlessly with just one click. You can upload P&L files too or add data yourself.</p>
      </>,
      children: (
        <>
          <h4 className='mt-5 ms-5'>{`Import data directly from your broker(s)`}</h4>

          <div className='mt-3 ms-5'>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </>
      ),
      style: panelStyle,
    },
    {
      key: '2',
      label: <>
        <h4>{`Foreign Assets - US Stocks`}</h4>
        <p>Import US Stocks transactions directly. You can also declare gains from shares listed on other foreign exchanges or any other foreign assets.</p>
      </>,
      children: (
        <>
          <h4 className='mt-5 ms-5'>{`Import data directly from your broker(s)`}</h4>

          <div className='mt-3 ms-5'>
            <Tabs defaultActiveKey="1" items={UsStocksBroker} onChange={onChange} />
          </div>
        </>
      ),
      style: panelStyle,
    },
    {
      key: '3',
      label: <>
        <h4>{`Sale of Land or Building`}</h4>
        <p>Gains from sale of land, residential or commercial buildings and other real estate properties</p>
      </>,
      children: (
        <>
          <div className="d-flex gap-4">
            <BBButton variant={"primary"} isSecondaryBtn>
              Add Entry
            </BBButton>
            {addProperty && <BBButton variant={"primary"} isSecondaryBtn onClick={() => setAddProperty(false)}>
              Cancle
            </BBButton>}
          </div>
          {
            addProperty && <AddPropertyDetails isModalOpen={addProperty} setIsModalOpen={setAddProperty} />
          }
        </>
      ),
      style: panelStyle,
    },
    {
      key: '3',
      label: <>
        <h4>{`Stock Options & RSUs`}</h4>
        <p>Gains from Sale of vested Restricted Stock Units (RSUs) and exercised Stock Options, ESOPs</p>
      </>,
      children: (
        <>
          <div className="d-flex gap-4">
            <BBButton variant={"primary"} isSecondaryBtn>
              Add Entry
            </BBButton>
            {addStockOption && <BBButton variant={"primary"} isSecondaryBtn onClick={() => setAddStockOption(false)}>
              Cancle
            </BBButton>}
          </div>
          {
            addStockOption && <AddStockOption isModalOpen={addStockOption} setIsModalOpen={setAddStockOption} />
          }
        </>
      ),
      style: panelStyle,
    },
    {
      key: '4',
      label: <>
        <h4>{`Bonds and Debentures`}</h4>
        <p>
          Gains or losses from Bonds and Debentures including Government, Corporate and Tax-free Bonds</p>
      </>,
      children: (
        <>
          <h4 className='mt-5 ms-5'>{`Import data directly from your broker(s)`}</h4>

          <div className='mt-3 ms-5'>
            <Tabs defaultActiveKey="1" items={Bonds} onChange={onChange} />
          </div>
        </>
      ),
      style: panelStyle,
    },
    {
      key: '5',
      label: <>
        <h4>{`Gold, Jewellery and Others`}</h4>
        <p>
          Gold, Jewellery, Paintings, Sculptures, Archaeological Collections, and any other relevant capital assets</p>
      </>,
      children: (
        <>
          <h4 className='mt-5 ms-5'>{`Import data directly from your broker(s)`}</h4>

          <div className='mt-3 ms-5'>
            <Tabs defaultActiveKey="1" items={GoldJewellery} onChange={onChange} />
          </div>
        </>
      ),
      style: panelStyle,
    },
    {
      key: '3',
      label: <>
        <h4>{`Deemed Capital Gains`}</h4>
        <p>
          Capital gains previously exempted but are now subject to taxation</p>
      </>,
      children: (
        <>
          <div className="d-flex gap-4">
            <BBButton variant={"primary"} isSecondaryBtn onClick={() => setAddDeemed(true)}>
            Add Entry
          </BBButton>
          {addDeemed && <BBButton variant={"primary"} isSecondaryBtn onClick={() => setAddDeemed(false)}>
            Cancle
          </BBButton>}
        </div>
    {
      addDeemed && <AddDeemed isModalOpen={addDeemed} setIsModalOpen={setAddDeemed} />
          }
        </>
      ),
style: panelStyle,
    },
  ]


return (
  <>
    <div
      className={clsx(
        styles.BusinessIncomeWrapper,
        styles.BusinessIncomeWrapperGainSummary,
        "border-2"
      )}
    >
      <div className={"d-flex align-items-start justify-content-between"}>
        <h4
          className={clsx(
            styles.BusinessIncomeContentWrapper,
            "d-flex align-items-start justify-content-between"
          )}
        >
          Capital Gain Summary
        </h4>
      </div>
      <ul className="d-flex flex-column">
        <li className="d-flex align-items-center justify-content-between gap-2">
          <p className="p-lg fw-semibold">Long term capital gain</p>
          <p className="p-lg fw-semibold">₹0 </p>
        </li>
        <li className="d-flex align-items-center justify-content-between gap-2">
          <p className="p-lg fw-semibold">Short term capital gain</p>
          <p className="p-lg fw-semibold">₹0 </p>
        </li>
      </ul>
    </div>
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
    />
  </>
)
}

export default CapitalGainsIncome