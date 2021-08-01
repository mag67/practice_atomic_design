import React from "react";
import {
  ChevronRightIcon,
  TrashCanIcon,
  SearchIcon,
  SettingsIcon,
} from "./index.js";
import { action } from "@storybook/addon-actions";

export default (stories) =>
  stories
    .add("TrashCanIcon", () => <TrashCanIcon />)
    .add("ChevronRightIcon", () => <ChevronRightIcon />)
    .add("SearchIcon", () => <SearchIcon />)
    .add("SettingsIcon", () => <SettingsIcon />)
    .add("クリッカブル", () => (
      <TrashCanIcon onClick={action("アイコンがクリックされました")} />
    ));
