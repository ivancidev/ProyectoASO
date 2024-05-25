import searchWhite from "../../assets/searchWhite.svg";
import RadioButton from "../../components/Buttons/RadioButton";
import TextInput from "../../components/TextInput/TextInput";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine";
import FooterButtonAdd from "../../components/Buttons/FooterButtonAdd";
import React, { useState } from "react";
import { helpTextAdd } from "../../utils/helpText";
import Checkbox from "../../components/Checkbox/Checkbox";

export default function Add() {
  const [permissions, setPermissions] = useState({
    user: { read: false, write: false, execute: false },
    group: { read: false, write: false, execute: false },
    others: { read: false, write: false, execute: false },
  });

  const [shareName, setShareName] = useState("");
  const [shareDescription, setShareDescription] = useState("");
  const [sharePath, setSharePath] = useState("");
  const [shareType, setShareType] = useState("Directory");

  const handlePermissionChange = (entity, permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [entity]: {
        ...prevPermissions[entity],
        [permission]: !prevPermissions[entity][permission],
      },
    }));
  };

  const [options, setOptions] = useState([
    { label: "Read only", name: "readOnly", checked: false },
    { label: "Inherit ACLs", name: "inherit", checked: false },
    { label: "Utilize Btfrs Features", name: "utilize", checked: false },
  ]);

  const handleCheckboxChange = (name) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.name === name ? { ...option, checked: !option.checked } : option
      )
    );
  };

  const handleShareTypeChange = (type) => {
    setShareType(type);
    if (type === "Printer") {
      setSharePath(""); // Vacía el campo Share Path al cambiar a Printer
      setOptions((prevOptions) =>
        prevOptions.map((option) =>
          option.name === "readOnly" || option.name === "inherit"
            ? { ...option, disabled: true, checked: false }
            : { ...option, disabled: false }
        )
      );
    } else {
      setOptions((prevOptions) =>
        prevOptions.map((option) => ({ ...option, disabled: false }))
      );
    }
  };

  const handleSubmit = () => {
    const shareData = {
      name: shareName,
      shareType,
      options: {},
      permissions,
    };

    if (shareDescription) {
      shareData.comment = shareDescription;
    }

    if (shareType === "Printer") {
      shareData.path = "/var/tmp";
      shareData.options.printable = options.find(
        (option) => option.name === "utilize"
      ).checked
        ? "Yes"
        : "No";
    } else {
      if (!sharePath && shareType === "Directory") {
        console.error("Share path is required for directory type.");
        return;
      }
      shareData.path = sharePath;
    }

    options.forEach((option) => {
      shareData.options[option.name] = option.checked ? "Yes" : "No";
    });

    console.log("Share data:", shareData);
  };

  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 bg-white h-screen justify-start items-start">
        <HeaderLine text="New Share" />
        <section className="mx-52 px-56 space-y-1 font-roboto text-base">
          <h3 className="font-medium">Identification</h3>
          <TextInput
            label="Share Name"
            value={shareName}
            onChange={(e) => setShareName(e.target.value)}
          />
          <TextInput
            label="Share Description"
            value={shareDescription}
            onChange={(e) => setShareDescription(e.target.value)}
          />
          <section className="flex ml-6">
            <label>Share Type</label>
            <div className="px-5">
              <RadioButton
                id="optprint"
                name="shrtyp"
                label="Printer"
                checked={shareType === "Printer"}
                onChange={() => handleShareTypeChange("Printer")}
              />
              <RadioButton
                id="optdirec"
                name="shrtyp"
                label="Directory"
                checked={shareType === "Directory"}
                onChange={() => handleShareTypeChange("Directory")}
              />
            </div>
          </section>
          <div className="flex space-x-2">
            <TextInput
              label="Share Path"
              value={sharePath}
              onChange={(e) => setSharePath(e.target.value)}
              disabled={shareType === "Printer"}
            />
            <button
              className={`bg-customHover items-center justify-center flex rounded w-8 h-8 ${
                shareType === "Printer" ? "bg-gray-200" : ""
              }`}
              disabled={shareType === "Printer"}
            >
              <img
                src={searchWhite}
                alt="Filtro"
                className="w-6 h-6 opacity-none"
              />
            </button>
          </div>
          <div className="px-12 space-y-1">
            {options.map((option) => (
              <Checkbox
                key={option.name}
                label={option.label}
                name={option.name}
                checked={option.checked}
                onChange={() => handleCheckboxChange(option.name)}
                disabled={option.disabled}
              />
            ))}
          </div>
          <br />
          <h3 className="font-medium">Permissions</h3>
          <div className="pt-2 pb-3 pr-8 pl-8 w-96 flex justify-center">
            <table>
              <thead>
                <tr>
                  <th className="px-2"></th>
                  <th className="px-2">Read</th>
                  <th className="px-2">Write</th>
                  <th className="px-2">Execute</th>
                </tr>
              </thead>
              <tbody className="space-y-1">
                {Object.entries(permissions).map(([entity, perms]) => (
                  <tr key={entity} className="w-10">
                    <td className="text-center">
                      {entity.charAt(0).toUpperCase() + entity.slice(1)}
                    </td>
                    {Object.entries(perms).map(([permission, value]) => (
                      <td className="w-4 text-center" key={permission}>
                        <input
                          className="w-4"
                          type="checkbox"
                          checked={value}
                          onChange={() =>
                            handlePermissionChange(entity, permission)
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
      <FooterButtonAdd
        title={helpTextAdd.title}
        description={helpTextAdd.description}
        handleSubmit={handleSubmit}
        name={shareName}
      />
    </>
  );
}
