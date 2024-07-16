import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

interface DropdownOption {
  id: string | number;
  name: string;
  [key: string]: any; // Allow for additional properties
}

interface DropdownProps {
  options: DropdownOption[];
  selectedOption: DropdownOption | null;
  onSelect: (option: DropdownOption) => void;
  placeholder?: string;
  renderOption?: (option: DropdownOption) => h.JSX.Element;
}

const Dropdown: FunctionalComponent<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
  placeholder = "Select an option",
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  const dropdownStyles = {
    dropdownComp: {
      position: "relative",
      width: "200px",
    },
    dropdownToggle: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#f8f8f8",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%",
      left: "0",
      width: "100%",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      zIndex: 1,
    },
    dropdownItem: {
      padding: "10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={dropdownStyles.dropdownComp}>
      <div className="dropdown-wrapper">
        <button
          style={dropdownStyles.dropdownToggle}
          onClick={toggleDropdown}
          onBlur={() => setIsOpen(false)}
        >
          <div className="select-dropdown-title">
            <div id="dropdown-title">
              {selectedOption ? selectedOption.name : placeholder}
            </div>
          </div>
        </button>
        {isOpen && (
          <div style={dropdownStyles.dropdownMenu}>
            {options.map((option) => (
              <div
                key={option.id}
                style={dropdownStyles.dropdownItem}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(option);
                }}
              >
                {renderOption ? renderOption(option) : option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
