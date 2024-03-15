import React, { useState } from 'react'
import {
  Button,
  ButtonGroup,
  ButtonProps,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'
import IconSvg from '../IconSvg'

export type DropdownSelectProps = {
  options: string[]
  selectedIndex?: number
  setSelectedIndex?: (selectedIndex: number) => void
  onButtonClick?: (selectedIndex: number) => void
  variant?: ButtonProps['variant']
  buttonGroupAriaLabel?: string
}
// Derived from https://mui.com/material-ui/react-button-group/#split-button

/**
 * Renders a button group that acts as a select group
 * @param props
 * @constructor
 */
export default function DropdownSelect(props: DropdownSelectProps) {
  const {
    options,
    selectedIndex,
    setSelectedIndex,
    variant = 'contained',
    buttonGroupAriaLabel,
    onButtonClick,
  } = props
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const [selectedIndexLocal, setSelectedIndexLocal] = useState(
    selectedIndex ?? 0,
  )

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    if (setSelectedIndex) {
      setSelectedIndex(index)
    } else {
      setSelectedIndexLocal(index)
    }
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  return (
    <React.Fragment>
      <ButtonGroup
        variant={variant}
        ref={anchorRef}
        aria-label="split button"
        size="small"
      >
        <Button
          className="optionsButton"
          onClick={() => {
            if (onButtonClick) {
              onButtonClick(selectedIndex ?? selectedIndexLocal)
            } else {
              handleToggle()
            }
          }}
        >
          {options[selectedIndex ?? selectedIndexLocal]}
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label={buttonGroupAriaLabel}
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{ width: '36px' }}
        >
          <IconSvg icon={'expandMore'} wrap={false} />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 10,
        }}
        open={open}
        placement={'bottom-start'}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  )
}
