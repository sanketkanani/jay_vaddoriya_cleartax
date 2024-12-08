import { BBSectionCard } from "@components";
import { Tabs } from "antd";
import { EditProfile } from "./EditProfile";
import { Preferences } from "./Preferences";
import { Security } from "./Security";
import styles from "./Settings.module.css";
import { useTitle } from "../../App";

const Settings = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Settings");
  const items = [
    {
      key: "Edit Profile",
      label: "Edit Profile",
      children: <EditProfile />,
    },
    {
      key: "Preferences",
      label: "Preferences",
      children: <Preferences />,
    },
    {
      key: "Security",
      label: "Security",
      children: <Security />,
    },
  ];
  return (
    <BBSectionCard>
      <Tabs
        className={styles.settings}
        defaultActiveKey="Preferences"
        items={items}
      />
    </BBSectionCard>
  );
};

export default Settings;
