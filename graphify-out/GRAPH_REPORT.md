# Graph Report - h4a-portfolio  (2026-08-04)

## Corpus Check
- 87 files · ~476,085 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 522 nodes · 645 edges · 48 communities (45 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a0317df2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- sidebar.tsx
- devDependencies
- use-toast.ts
- Index.tsx
- carousel.tsx
- compilerOptions
- utils.ts
- command.tsx
- components.json
- pagination.tsx
- compilerOptions
- App.tsx
- form.tsx
- menubar.tsx
- compilerOptions
- context-menu.tsx
- dropdown-menu.tsx
- package.json
- alert-dialog.tsx
- cn
- table.tsx
- breadcrumb.tsx
- drawer.tsx
- navigation-menu.tsx
- select.tsx
- card.tsx
- toggle-group.tsx
- input-otp.tsx
- generate-pdf.mjs
- alert.tsx
- avatar.tsx
- badge.tsx
- tabs.tsx
- scroll-area.tsx
- textarea.tsx
- vercel.json

## God Nodes (most connected - your core abstractions)
1. `cn()` - 70 edges
2. `compilerOptions` - 19 edges
3. `compilerOptions` - 14 edges
4. `scripts` - 8 edges
5. `compilerOptions` - 8 edges
6. `react` - 7 edges
7. `tailwind` - 6 edges
8. `aliases` - 6 edges
9. `buttonVariants` - 6 edges
10. `useToast()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/components/ui/carousel.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  src/components/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/components/ui/form.tsx → package.json
- `useSidebar()` --references--> `react`  [EXTRACTED]
  src/components/ui/sidebar.tsx → package.json
- `useIsMobile()` --references--> `react`  [EXTRACTED]
  src/hooks/use-mobile.tsx → package.json

## Import Cycles
- None detected.

## Communities (48 total, 3 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.04
Nodes (50): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @fontsource/anton, @fontsource/jetbrains-mono (+42 more)

### Community 1 - "sidebar.tsx"
Cohesion: 0.05
Nodes (39): Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+31 more)

### Community 2 - "devDependencies"
Cohesion: 0.06
Nodes (34): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, jsdom (+26 more)

### Community 3 - "use-toast.ts"
Cohesion: 0.12
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 4 - "Index.tsx"
Cohesion: 0.10
Nodes (16): lenis, Cursor(), Contact(), links, Experience(), jobs, Hero(), lines (+8 more)

### Community 5 - "carousel.tsx"
Cohesion: 0.07
Nodes (23): react, Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext (+15 more)

### Community 6 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleDetection, moduleResolution (+13 more)

### Community 7 - "utils.ts"
Cohesion: 0.11
Nodes (10): NavLink, NavLinkCompatProps, AccordionContent, AccordionItem, AccordionTrigger, Checkbox, HoverCardContent, Progress (+2 more)

### Community 8 - "command.tsx"
Cohesion: 0.12
Nodes (15): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+7 more)

### Community 9 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 10 - "pagination.tsx"
Cohesion: 0.17
Nodes (13): Button, ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis() (+5 more)

### Community 11 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 12 - "App.tsx"
Cohesion: 0.16
Nodes (7): sonner, App(), queryClient, Toaster(), ToasterProps, Index(), NotFound()

### Community 13 - "form.tsx"
Cohesion: 0.15
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 14 - "menubar.tsx"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 15 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, allowJs, noImplicitAny, noUnusedLocals, noUnusedParameters, paths, skipLibCheck, strictNullChecks (+3 more)

### Community 16 - "context-menu.tsx"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 17 - "dropdown-menu.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 18 - "package.json"
Cohesion: 0.22
Nodes (8): dependencies, playwright, name, private, scripts, pdf, type, version

### Community 19 - "alert-dialog.tsx"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 20 - "cn"
Cohesion: 0.28
Nodes (6): PopoverContent, RadioGroup, RadioGroupItem, ResizableHandle(), ResizablePanelGroup(), cn()

### Community 21 - "table.tsx"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 22 - "breadcrumb.tsx"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 23 - "drawer.tsx"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 24 - "navigation-menu.tsx"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 25 - "select.tsx"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 26 - "card.tsx"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 27 - "toggle-group.tsx"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 28 - "input-otp.tsx"
Cohesion: 0.33
Nodes (5): input-otp, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 29 - "generate-pdf.mjs"
Cohesion: 0.40
Nodes (3): __dirname, htmlPath, outPath

### Community 30 - "alert.tsx"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 31 - "avatar.tsx"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 32 - "badge.tsx"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 33 - "tabs.tsx"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

## Knowledge Gaps
- **343 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+338 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `use-toast.ts`, `carousel.tsx`, `utils.ts`, `command.tsx`, `pagination.tsx`, `form.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `alert-dialog.tsx`, `table.tsx`, `breadcrumb.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `select.tsx`, `card.tsx`, `toggle-group.tsx`, `input-otp.tsx`, `alert.tsx`, `avatar.tsx`, `badge.tsx`, `tabs.tsx`, `scroll-area.tsx`, `textarea.tsx`?**
  _High betweenness centrality (0.281) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`, `Index.tsx`, `carousel.tsx`, `App.tsx`, `input-otp.tsx`?**
  _High betweenness centrality (0.238) - this node is a cross-community bridge._
- **Why does `input-otp` connect `input-otp.tsx` to `dependencies`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _343 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.050241545893719805 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._