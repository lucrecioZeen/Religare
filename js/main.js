//Floating Action Button
const emensBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(emensBtns, {
    direction: "left"
});

elemsSidenav = document.querySelectorAll(".sidenav");
const instacesSidenav = M.Sidenav.init(elemsSidenav);