CREATE TABLE `viewing_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`preferredDate` varchar(50) NOT NULL,
	`preferredTime` enum('morning','afternoon','evening','flexible') NOT NULL DEFAULT 'flexible',
	`numberOfGuests` int NOT NULL DEFAULT 1,
	`currentLocation` varchar(255),
	`notes` text,
	`status` enum('pending','confirmed','completed','cancelled') NOT NULL DEFAULT 'pending',
	`userAgent` text,
	`ipAddress` varchar(45),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `viewing_requests_id` PRIMARY KEY(`id`)
);
