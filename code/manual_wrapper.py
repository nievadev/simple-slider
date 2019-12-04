import curses

def wrapper(main):
    def inner():
        stdscr = curses.initscr()
        curses.noecho()
        curses.curs_set(0)
        curses.raw()

        try:
            main(stdscr)

        except Exception as err:
            pass

        finally:
            curses.endwin()

    return inner

@wrapper
def main(stdscr):
    stdscr.addstr("Hello world!")
    stdscr.getch()

if __name__ == "__main__":
    main()
